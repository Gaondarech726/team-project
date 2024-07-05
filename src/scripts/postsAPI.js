// const URL_POSTS = 'http://localhost:3000/posts';

// class PostsAPI {
//   async getAllPosts() {
//     try {
//       const res = await fetch(`${URL_POSTS}`);

//       const parsedData = await res.json();
//       return parsedData;
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async getById(id) {
//     try {
//       const res = await fetch(`${URL_POSTS}/${id}`);
//       const parsedData = await res.json();
//       return parsedData;
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async addPost(post) {
//     try {
//       const answer = await fetch(`${URL_POSTS}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//       });

//       const parsedData = await answer.json();
//       return parsedData;
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async updatePost(post) {
//     try {
//       const answer = await fetch(`${URL_POSTS}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//       });

//       const parsedData = await answer.json();
//       return parsedData;
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async deletePost(id) {
//     try {
//       const res = await fetch(`${URL_POSTS}/${id}`, {
//         method: 'DELETE',
//       });

//       if (!res.ok) {
//         throw new Error(res.status);
//       }

//       return await res.json();
//     } catch (e) {
//       console.error(e);
//     }
//   }
// }

// const postsAPI = new PostsAPI();
// export default postsAPI;
