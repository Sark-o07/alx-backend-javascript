export default function getStudentsByLocation(objArray, city) {
  const studentsByLocation = objArray.filter((obj) => obj.location === city);
  return studentsByLocation;
}
