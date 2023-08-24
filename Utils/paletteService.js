import React, { useCallback, useState } from "react";
import axios from "axios";

const URL = "https://color-palette-api.kadikraman.vercel.app/palettes";

export const useColorPalettes = () => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    try {
      const response = await axios.get(URL);

      if (response.status === 200) {
        const palettes = response.data;
        setColorPalettes(palettes);
      }
    } catch (error) {
      console.error("Error fetching color palettes:", error);
    }
  }, []);

  return { colorPalettes, fetchColorPalettes };
};
