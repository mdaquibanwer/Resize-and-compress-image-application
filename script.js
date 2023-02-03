const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
uploadFileInput = uploadBox.querySelector("input"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
ratioInput = document.querySelector(".ratio input"),
qualityInput = document.querySelector(".quality input");

let ogImageRatio;

const loadFile = (e)=>{
    const file = e.target.files[0]; // getting first user selected file
    if(!file) return;   // return if user doesnot selected any file
    previewImg.src = URL.createObjectURL(file); // passing selected file url to preview img src
    previewImg.addEventListener("load",()=>{
        document.querySelector(".container").classList.add("active");
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
    })
    console.log(file)
}

widthInput.addEventListener("input",()=>{
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;    // getting height of the image according to the width
    heightInput.value = Math.floor(height);
})
heightInput.addEventListener("input",()=>{
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value; // getting width of the image according to the height
    widthInput.value = Math.floor(width);
})

uploadFileInput.addEventListener("change",loadFile);
uploadBox.addEventListener("click",()=>{
    uploadFileInput.click();
})