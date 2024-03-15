import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotfoundPage from "./NotfoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import articles from "./article-content";

function ArticlePage(){
     const [articleInfo,setArticleInfo] = useState({likes: 0,comments:[] });
     const {articleId} = useParams();

    useEffect (() => {
      const loadArticleInfo = async () => {
         const response = await axios.get(`/api/articles/${articleId}`);
         const newArticleInfo = response.data;
         setArticleInfo(newArticleInfo);
      };

      loadArticleInfo();
      },[articleId]);

      const article = articles.find((article) => article.name === articleId);

      const addlikes = async () => {
         const response = await axios.put (`/api/articles/${articleId}/likes`);
         const updateArticle = response.data;
         setArticleInfo(updateArticle);
      }
   
      if(article) {
        return (
            <>
            <h1>{article.title}</h1>
            <div className="upvote-section">
               <button onClick={addlikes}>Like</button>
            </div>
            <p>
               {article.title} has {articleInfo.likes } likes!...
            </p>
             {article.content.map((paragraph,i) =>(
             <p key ={i}> {paragraph}</p>
             ))}

             <AddCommentForm
             articleName={articleId}
             onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}>

             </AddCommentForm>

             <CommentsList comments={articleInfo.comments}></CommentsList>
            </>
        );
     } else{
        return  <NotfoundPage></NotfoundPage>
        }
    }

    export default ArticlePage;
