import './styles/DateInfo.css'

const contributions = [
    { className: '', text: 'No contributions' },
    { className: 'more-0', text: '1-9 contributions' },
    { className: 'more-10', text: '10-20 contributions' },
    { className: 'more-20', text: '20-30 contributions' },
    { className: 'more-30', text: '30+ contributions' }
];

const DateInfo = () => {
    return (
        <div className="contributionInfo">
            <p className="less">Меньше</p>
            {contributions.map((contribution, index) => (
                <div className={`contribution ${contribution.className}`} key={index}>
                    <div className="contributionDate">
                        <p>{contribution.text}</p>
                    </div>
                </div>
            ))}
            <p className="more">Больше</p>
        </div>
    );
};

export default DateInfo;
