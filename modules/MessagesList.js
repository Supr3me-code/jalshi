import { FlatList } from "react-native";
import MessageCard from "../elements/MessageCard";

const MessagesList = ({ messages }) => {
  const renderMessageCard = (itemData) => {
    const item = itemData.item;
    const messageCardProps = {
      message: item.message,
      name: item.name,
    };
    return <MessageCard {...messageCardProps} />;
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id}
      renderItem={renderMessageCard}
    />
  );
};

export default MessagesList;
