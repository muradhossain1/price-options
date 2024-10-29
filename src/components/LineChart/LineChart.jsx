import { LineChart, Line, XAxis, YAxis} from 'recharts';

const LineCharts = () => {
    const studentData = [
        { student: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 88 },
        { student: "Bob", mathMarks: 78, physicsMarks: 83, chemistryMarks: 76 },
        { student: "Charlie", mathMarks: 92, physicsMarks: 91, chemistryMarks: 89 },
        { student: "Daisy", mathMarks: 74, physicsMarks: 69, chemistryMarks: 72 },
        { student: "Evan", mathMarks: 88, physicsMarks: 85, chemistryMarks: 90 },
        { student: "Fiona", mathMarks: 80, physicsMarks: 75, chemistryMarks: 82 },
        { student: "George", mathMarks: 95, physicsMarks: 92, chemistryMarks: 93 },
        { student: "Hannah", mathMarks: 67, physicsMarks: 73, chemistryMarks: 68 },
        { student: "Ivy", mathMarks: 83, physicsMarks: 78, chemistryMarks: 85 },
        { student: "Jack", mathMarks: 76, physicsMarks: 70, chemistryMarks: 79 }
      ];      
    return (
        <div>
            <LineChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='blue'></Line>
            </LineChart>

        </div>
    );
};

export default LineCharts;