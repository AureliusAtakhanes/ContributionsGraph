import './styles/Months.css';

const months = [
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.',
    'Янв.',
    'Февр.',
    'Март'
];

const Months = () => {
    return (
        <ul className="graph-months">
            {months.map(month => (
                <li key={month}><p>{month}</p></li>
            ))}
        </ul>
    );
};

export default Months;
