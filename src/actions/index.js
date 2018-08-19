export * from './loginActions.js'
export * from './newUserActions.js'


// export const submitNewPost = ( newPost ) =>{
//   const {
//     postUser,
//     postTitle,
//     postZip,
//     postBlurb,
//     active:true
//     toolsRequired:false
//     willTeach:false
//     contact
//   } = newPost
//   return ( dispatch ) => {
//     dispatch({type:SUBMIT_NEW_HELP_POST})
//     axios.post(`${URL}helpWanted/new`, {create:newPost})
//     .then(result=>{
//       console.log(result)
//       dispatch({type:NEW_POST_SUCCESS, payload:result.data})
//     })
//     .catch(err=>{
//       dispatch({type:NEW_POST_FAIL, payload:err })
//       console.log(err)
//     })
//   }
// }
