import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container/Container";
import { Heading } from "../../components/ui/Heading/Heading";
import { NoContent } from "../../components/ui/NoContent/NoContent";
import { Pagination } from "../../components/Pagination/Pagination";
import { Posts } from "./Posts/Posts";
import { modifyData } from "../../helpers/modifyData";
import { getAllPosts } from "../../helpers/getAllPosts";
import { getFilteredPosts } from "../../helpers/getFilteredPosts";
import { ITEMS_PER_PAGE } from "../../constants/constants";
import * as SC from "./styles";

const Main = () => {
  const { admin, user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);
  const posts = admin
    ? getAllPosts(privatePosts, publicPosts)
    : getFilteredPosts(user, friends, privatePosts, publicPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("DATE_DESC");
  const { data } = modifyData(posts, currentPage, sortType);

  const changeSortType = (type) => {
    setSortType(type);
    modifyData(posts, currentPage, type);
  };

  return (
    <Container>
      <Heading $center>Посты</Heading>
      {data.length !== 0 && (
        <SC.List
          onChange={(e) => {
            changeSortType(e.target.value);
          }}
          value={sortType}
        >
          <option value="DATE_ASC">Показать старые посты</option>
          <option value="DATE_DESC">Показать новые посты</option>
        </SC.List>
      )}
      <SC.PostsSection>
        {data.length !== 0 ? (
          data.map((post) => <Posts key={post.id} publication={post} />)
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
      {posts.length > ITEMS_PER_PAGE && (
        <Pagination
          items={posts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default Main;
