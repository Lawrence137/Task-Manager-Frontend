// import React, { useState, useEffect } from 'react';

// function TaskItem({ task }) {
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     async function fetchDetails() {
//       const response = await fetch(`http://localhost:9292/tasks/${task.id}`);
//       const details = await response.json();
//       setDetails(details);
//     }
//     fetchDetails();
//   }, [task.id]);

//   return (
//     <div>
//       <h2>{task.description}</h2>
//       {details && (
//         <div>
//           <p>Completed: {details.completed.toString()}</p>
//           <p>Created at: {details.createdAt}</p>
//           <p>Updated at: {details.updatedAt}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TaskItem;

function TaskItem() {
  return 
}

export default TaskItem;