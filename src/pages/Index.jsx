import { useState } from "react";
import { Box, Button, Input, List, ListItem, IconButton, Text, VStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  return (
    <VStack p={8} spacing={8}>
      <Heading mb={4}>Todo App</Heading>
      <Box display="flex" alignItems="center">
        <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} bg={bg} color={color} />
        <IconButton icon={<FaPlus />} onClick={handleAddTask} ml={2} colorScheme="blue" aria-label="Add task" />
      </Box>
      <List spacing={3} w="100%">
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" bg={bg} p={4} borderRadius="md">
            <Text>{task}</Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(index)} colorScheme="red" aria-label="Delete task" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
