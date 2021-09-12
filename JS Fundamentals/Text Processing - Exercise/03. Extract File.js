function extract(arr) {
  let index = arr.lastIndexOf("\\");
  let text = arr.substring(index + 1).split(".");
  let extension = text.pop();

  console.log(`File name: ${text.join(".")}`);
  console.log(`File extension: ${extension}`);
}
extract("C:\\Internal\\training-internal\\Template.doc.pptx");
extract("C:\\Projects\\Data-Structures\\LinkedList.cs");
