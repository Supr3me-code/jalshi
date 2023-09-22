import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InfoCard from "../elements/InfoCard";

const InfoList = ({ info }) => {
  const navigation = useNavigation();

  const renderInfoCard = (itemData) => {
    const item = itemData.item;
    const onPressHandler = () => {
      navigation.navigate("InfoDetails", { infoId: item.id });
    };
    const infoCardProps = {
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      onPress: onPressHandler,
    };
    return <InfoCard {...infoCardProps} />;
  };

  return (
    <FlatList
      data={info}
      keyExtractor={(info) => info.id}
      renderItem={renderInfoCard}
    />
  );
};

export default InfoList;
