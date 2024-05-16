import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Shelter, Need } from "./MapPoa";

export function UseShelterData(): {
  shelters: Shelter[];
  needs: Need[];
  error?: string;
} {
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [needs, setNeeds] = useState<Need[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const response = await api.get("/shelters");
        setShelters(response.data);
      } catch (error) {
        setError("Não foi possível carregar dados dos abrigos.");
      }
    };
    const fetchNeeds = async () => {
      try {
        const response = await api.get("/needs");
        setNeeds(response.data);
      } catch (error) {
        setError("Não foi possível carregar dados dos abrigos.");
      }
    };
    fetchShelters();
    fetchNeeds();
  }, []);

  if (error) {
    return { shelters: [], needs: [], error };
  }

  return { shelters, needs };
}
