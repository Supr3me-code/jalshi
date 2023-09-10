import { FlatList } from "react-native";
import EventCard from "../elements/EventCard";
import { useNavigation } from "@react-navigation/native";

const EventsList = ({ events }) => {
  const navigation = useNavigation();

  const renderEventCard = (itemData) => {
    const item = itemData.item;
    const onPressHandler = () => {
      navigation.navigate("EventDetails", { eventId: item.id });
    };
    const eventCardProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      onPress: onPressHandler,
    };
    return <EventCard {...eventCardProps} />;
  };

  return (
    <FlatList
      data={events}
      keyExtractor={(event) => event.id}
      renderItem={renderEventCard}
    />
  );
};

export default EventsList;
