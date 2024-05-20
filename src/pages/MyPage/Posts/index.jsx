import { useSelector } from "react-redux";
import { NoContent } from "../../../components/ui/NoContent";
import { Post } from "./Post";
import { toFilterPosts } from "../../../helpers/toFilter";
import * as SC from "./styles";

export const Posts = () => {
  const { user } = useSelector((state) => state.currentUser);
  const { privatePosts } = useSelector((state) => state.posts);
  const { publicPosts } = useSelector((state) => state.posts);
  const myPublicPosts = toFilterPosts(user, publicPosts);
  const myPrivatePosts = toFilterPosts(user, privatePosts);

  return (
    <SC.SectionPosts>
      <h3>Общедоступные посты</h3>
      <SC.MyPosts>
        {myPublicPosts.length !== 0 ? (
          myPublicPosts.map((filteredPost) => (
            <Post key={filteredPost.id} myPost={filteredPost} />
          ))
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>

      <h3>Посты только для друзей</h3>
      <SC.MyPosts>
        {myPrivatePosts.length !== 0 ? (
          myPrivatePosts.map((post) => <Post key={post.id} myPost={post} />)
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>
    </SC.SectionPosts>
  );
};
