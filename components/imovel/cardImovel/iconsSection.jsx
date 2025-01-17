import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BedIcon from "@mui/icons-material/Bed";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const IconsSection = ({ detalhes }) => {
  const iconDetails = [
    { icon: DirectionsCarIcon, value: detalhes["vagas_garagem"] },
    {
      icon: BedIcon,
      value: `${detalhes["total_dormitorios"]} | ${detalhes["total_suites"]}`,
    },
    { icon: AspectRatioIcon, value: `${detalhes["area_total"]} m²` },
  ];

  return (
    <div className="flex justify-between items-center mt-auto py-2 border-t border-gray-300">
      {iconDetails.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="flex items-center">
            <IconComponent className="mr-1" />
            <span className="text-sm">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default IconsSection;
