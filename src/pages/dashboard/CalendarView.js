import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/calendar')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Erro ao carregar eventos:', error));
  }, []);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt('Informe o título do evento:');
    const createdBy = prompt('Informe o criador do evento:');
    if (title && createdBy) {
      const newEvent = { id: events.length + 1, start, end, title, createdBy };
      setEvents([...events, newEvent]);
      axios.post('http://localhost:5000/calendar', newEvent)
        .catch((error) => console.error('Erro ao salvar evento:', error));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calendário de Aulas</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onNavigate={(date, view) => console.log('Navegando:', date, view)}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => alert(`Evento: ${event.title}, Criado por: ${event.createdBy}`)}
      />
    </div>
  );
}

export default CalendarView;