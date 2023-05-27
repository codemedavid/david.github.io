const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger){
    const toast = bootsrap.Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener("click", () =>{
        toast.show();
    })
}