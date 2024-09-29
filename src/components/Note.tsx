import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface NoteProps {
  id: string;
  title: string;
  content: string;
  onDelete: (id: string) => void;
}

const Note = ({ id, title, content, onDelete }: NoteProps) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Button size="small" onClick={() => onDelete(id)} sx={{ marginTop: 1 }}>
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Note;
