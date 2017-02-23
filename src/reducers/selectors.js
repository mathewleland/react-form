export const getAllVideos = ({ videos }) => (
  Object.keys(videos).map(id => videos[id])
);

export const getAllUsers = ({ users }) => (
  Object.keys(users).map(id => users[id])
);

export const getAllComments = (comments) => (
  Object.keys(comments).map(id => comments[id])
);
