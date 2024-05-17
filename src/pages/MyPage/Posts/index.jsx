import { useSelector } from "react-redux";
import { NoContent } from "../../../components/ui/NoContent";
import { Post } from "./Post";
import { toFilter } from "../../../helpers/toFilter";
import * as SC from "./styles";

export const Posts = () => {
  const { user } = useSelector((state) => state.currentUser);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);
  const myPublicPosts = publicPosts?.filter((item) => {
    if (item.user.email === user.email) {
      console.log(item);
    }
  });
  const myPrivatePosts = toFilter(user, privatePosts);
  return (
    <SC.SectionPosts>
      <h3>Общедоступные посты</h3>
      <SC.MyPosts>
        {myPublicPosts ? (
          myPublicPosts.map((filteredPost) => (
            <Post key={filteredPost.id} myPost={filteredPost} />
          ))
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>

      <h3>Посты только для друзей</h3>
      <SC.MyPosts>
        {myPrivatePosts ? (
          myPrivatePosts.list.map((post) => (
            <Post key={post.id} myPost={post} />
          ))
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>
    </SC.SectionPosts>
  );
};
