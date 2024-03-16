export default function updateStudentGradeByCity(data, city, newGrades) {
  const SFstudents = data.filter((x) => x.location === city);
  const newData = SFstudents.map((x) => {
    const studentID = newGrades.find((entry) => entry.studentId === x.id);
    if (studentID) {
      return {
        ...x,
        grade: newGrades.grade,
      };
    }
    return {
      ...x,
      grade: 'N/A',
    };
  });
  return newData;
}
