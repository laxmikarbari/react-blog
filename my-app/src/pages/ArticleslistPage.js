import article from "./article-content";
import {Link} from "react-router-dom";


function ArticlelistPage(){
    return(
        <>
       <h1>list of articles</h1>
       {article.map ((article) =>(
        <Link key = {article.name} className="article-list-item" to={`/articles/${article.name}` }> 
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0,100)}....</p>      
             </Link>
       ))}
        </>
    );
}
export default ArticlelistPage;