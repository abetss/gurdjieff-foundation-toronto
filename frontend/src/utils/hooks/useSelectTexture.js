import { useState, useCallback } from 'react';

export const useSelectTexture = (contentType) => {
  const defaultTexture = localStorage.getItem('theme-texture') || 'paper';
  const [texture, _setTexture] = useState(defaultTexture);

  const setTexture = useCallback((name) => {
    _setTexture(name);
    localStorage.setItem('theme-texture', name);
    location.reload();
  })

  return [texture, setTexture, 'wallPaint']
}