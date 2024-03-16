export default function getStudentIdsSum(listStudents) {
  const idSum = listStudents.reduce((acc, obj) => acc + obj.id, 0);
  return idSum;
}
