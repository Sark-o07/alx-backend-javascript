export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) {
    return [];
  }
  const arrayId = arrayObj.map((obj) => obj.id);
  return arrayId;
}
