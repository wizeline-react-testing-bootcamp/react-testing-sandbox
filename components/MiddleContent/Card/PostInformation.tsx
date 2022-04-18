import React from "react";
import { connect } from "react-redux";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Router from "next/router";
import Avatar from "../../Avatar";
import { getSubredditInfo } from "../../../helpers";
import { contentActions } from "../../../actions";
import { Information, PostSubreddit } from "./Card.styles";

interface PostInformationProps {
  post: object;
  subreddits?: {
    model?: object;
    fetching?: boolean;
  };
  fetchSubReddit?(...args: unknown[]): unknown;
  showAvatar?: boolean;
  showSubreddit?: boolean;
}

const PostInformation = ({
  post,
  subreddits,
  fetchSubReddit,
  showAvatar,
  showSubreddit,
}: PostInformationProps) => {
  if (!post) {
    return null;
  }

  const subredditIcon = getSubredditInfo(
    subreddits,
    post.subreddit_id,
    "icon_img"
  );
  const avatarImage = subredditIcon ? subredditIcon : "";

  const onClick = () => {
    const href = `/${post.subreddit_name_prefixed}`;

    fetchSubReddit({
      sub: post.subreddit,
    });

    Router.push(`/?subredditName=${post.subreddit}`, href, { shallow: true });
  };

  const timeAgo = distanceInWordsToNow(post.created_utc * 1000);

  return (
    <Information>
      {showAvatar && <Avatar width={24} inlineBlock imageSrc={avatarImage} />}
      {showSubreddit && (
        <PostSubreddit onClick={onClick}>
          {post.subreddit_name_prefixed} ・
        </PostSubreddit>
      )}
      Posted by {post.author} ・ {timeAgo}
    </Information>
  );
};

const mapStateToProps = (state) => ({
  subreddits: state.subreddits,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubReddit: (params) => dispatch(contentActions.fetchSubReddit(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInformation);
