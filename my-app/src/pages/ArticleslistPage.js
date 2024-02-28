import article from "./article-content";
import ArticleList from "../components/ArticleList";


function ArticlelistPage(){
    return(
        <>
       <h1>list of articles</h1>
       <ArticleList articles = {article}></ArticleList>
        </>
    );
}
export default ArticlelistPage;