import { CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  text: string;
  deadline: string;
}

export const ItemContent = ({title, text, deadline}: Props) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" component="div">
        {text}
      </Typography>
      <Typography
        variant="body2"
        fontWeight="bold"
        color="text.secondary"
        component="div"
      >
        Deadline: {deadline}
      </Typography>
    </CardContent>
  );
};
