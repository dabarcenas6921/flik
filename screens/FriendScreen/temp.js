
// export default function FriendScreen() {
//     const [isOpen, setIsOpen] = React.useState(false);

//     const onClose = () => setIsOpen(false);
  
//     const cancelRef = React.useRef(null);

//     const removeFriend = (index) => {
//         testData.splice(index , 1)
//     }
    
//   return (
//     <SafeAreaView>
//     <ScrollView>
//     <Center maxW='80%' w='80%' alignSelf='center'>
//      <Center alignItems='center' alignSelf='center'>
//       <VStack space={4} alignItems="center">
//         <Text fontSize="lg">Your friends</Text>
//         <Input variant="rounded" placeholder="Search for a friend" onChangeText={(e) => console.log(e)} />
//       </VStack>
//      </Center>
     
//       <Center mt={2} alignItems='left' alignSelf='left'>
//         <Text bold fontSize="md">MY FRIENDS</Text>
//       </Center>

//       <VStack mt={2} space={4} alignItems="left" w='100%' alignSelf='left'>
//         {testData.map((data, index) => {
//             return (
//                 <HStack key={index} justifyContent="space-between" >
//                 <Avatar bg="indigo.500" alignSelf="center" size="md" source={{
//                 uri: 'https://placeimg.com/80/80/people'
//                 }} />
//                 <VStack space={1} alignItems="left">
//                     <Text fontSize='md'>{data.name}</Text>
//                     <Text fontSize='md'>{data.at}</Text>
//                 </VStack>
//                 <HStack alignSelf='right'>
//                 <AntDesign name="close" size={24} color="black" onPress={() => setIsOpen(!isOpen)} />
//                 </HStack>


//                 <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
//                 <AlertDialog.Content>
//                 <AlertDialog.CloseButton />
//                 <AlertDialog.Header>Remove Friend</AlertDialog.Header>
//                 <AlertDialog.Body>
//                     <Text>Are you sure you want to remove {data.name}?</Text>
//                 </AlertDialog.Body>
//                 <AlertDialog.Footer>
//                     <Button.Group space={2}>
//                     <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
//                         Cancel
//                     </Button>
//                     <Button colorScheme="danger" onPress={() => {onClose(), removeFriend(index)} }>
//                         Confirm
//                     </Button>
//                     </Button.Group>
//                 </AlertDialog.Footer>
//                 </AlertDialog.Content>
//                 </AlertDialog>
//                 </HStack>
//             )
//         })}
//       </VStack>

//       <Center mt={2} alignItems='left' alignSelf='left'>
//         <Text bold fontSize="md">MY CIRCLES</Text>
//       </Center>

//       <Flex direction='row' flexWrap={true} textAlign='center' justifyContent='space-around'>
//         {testCircle.map((data, index) => {
//             return (
//                 <Flex direction='row' mt={2} flexWrap={true} alignItems='left'>
//                     <VStack mt={2} alignItems='left' textAlign='center' key={index}>
//                         <Avatar bg="indigo.500" alignSelf="center" size="md" source={{
//                         uri: 'https://placeimg.com/80/80/people'
//                         }} />
//                         <Text fontSize='md'>{data.circleName}</Text>
//                     </VStack>
//                 </Flex>
//             )
//         })}
//       </Flex>


//     </Center>    
//     </ScrollView>
//     </SafeAreaView>
//   )
// }
