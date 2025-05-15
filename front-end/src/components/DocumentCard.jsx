import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DocumentCard = ({ title, type, updated }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit-document', {
      state: { title, type, updated }
    });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Updated: {updated}
        </Typography>
      </CardContent>
      <Button
        size="small"
        variant="outlined"
        sx={{ m: 2 }}
        onClick={handleEdit}
      >
        Edit
      </Button>
    </Card>
  );
};

export default DocumentCard;
