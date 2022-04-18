import React from "react";
import {
  Activity,
  Content,
  Details,
  Points,
  Comments,
} from "./Activities.styles";

interface ActivityItemProps {
  activiy: {
    id?: number;
    content?: string;
    details?: {
      points?: number | string;
      comments?: number;
    };
  };
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  if (!activity) {
    return null;
  }
  return (
    <Activity>
      <Content>{activity.content}</Content>
      <Details>
        <Points>{activity.details.points} points</Points>
        <Comments>{activity.details.comments} comments</Comments>
      </Details>
    </Activity>
  );
};

export default ActivityItem;
