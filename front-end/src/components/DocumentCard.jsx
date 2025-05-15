import { Card, CardContent, Typography, Button } from '@mui/material';

const DocumentCard = ({ title, type, updated }) => (
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
    <Button size="small" variant="outlined" sx={{ m: 2 }}>
      Edit
    </Button>
  </Card>
);

export default DocumentCard;
