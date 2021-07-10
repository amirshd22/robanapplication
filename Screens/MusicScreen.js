import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../Components/AppScreen";
import Player from "../Components/player/Player";

const songs = [
  {
    title: "death bed",
    artist: "Powfu",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "1",
  },
  {
    title: "bad liar",
    artist: "Imagine Dragons",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "2",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "3",
  },
  {
    title: "hate me",
    artist: "Ellie Goulding",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "4",
  },
  {
    title: "Solo",
    artist: "Clean Bandit",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "5",
  },
  {
    title: "without me",
    artist: "Halsey",
    image: "https://www.totalntertainment.com/wp-content/uploads/Powfu-2.jpg",
    id: "6",
  },
];

export default function MusicScreen() {
  return (
    <AppScreen>
      <Player songs={songs} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
