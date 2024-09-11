const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return  JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(job => job.id === id)
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItm('job-application',JSON.stringify(storedJobApplications))
    }

}
// export default saveJobApplication;
export {saveJobApplication}

