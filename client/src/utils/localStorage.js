export const getSavedResumeIds = () => {
  const savedResumeIds = localStorage.getItem('saved_resume')
    ? JSON.parse(localStorage.getItem('saved_resume'))
    : [];

  return savedResumeIds;
};

export const saveResumeIds = (resumeIdArr) => {
  if (resumeIdArr.length) {
    localStorage.setItem('saved_resume', JSON.stringify(resumeIdArr));
  } else {
    localStorage.removeItem('saved_resume');
  }
};

export const removeResumeId = (resumeId) => {
  const savedResumeIds = localStorage.getItem('saved_resume')
    ? JSON.parse(localStorage.getItem('saved_resume'))
    : null;

  if (!savedResumeIds) {
    return false;
  }

  const updatedSavedResumeIds = savedResumeIds?.filter((savedResumeId) => savedResumeId !== resumeId);
  localStorage.setItem('saved_resume', JSON.stringify(updatedSavedResumeIds));

  return true;
};
