const RenderContributions = ({ data }) => {
    const dates = Object.keys(data);
    const startDate = new Date(Math.min(...dates.map(date => new Date(date))));
    const endDate = new Date(Math.max(...dates.map(date => new Date(date))));

    const dateRange = [];

    for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const formattedDate = currentDate.toISOString().split("T")[0];
        const count = data[formattedDate] || 0;

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDateWords = currentDate.toLocaleDateString(undefined, options);

        const contributionClass =
            count >= 30
                ? "contribution more-30"
                : count >= 20
                    ? "contribution more-20"
                    : count >= 10
                        ? "contribution more-10"
                        : count > 0
                            ? "contribution more-0"
                            : "contribution";

        dateRange.push(
            <div className={contributionClass} key={formattedDate}>
                <div className="contributionDate">
                    <p>{count} contributions</p>
                    <p>{formattedDateWords}</p>
                </div>
            </div>
        );
    }

    return dateRange;
};

export default RenderContributions;
