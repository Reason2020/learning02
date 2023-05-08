import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'

const MessengerStyleUIWithList = () => {
    const users = [
        {
            uid: 1,
            userName: 'Alicia Rodriguez',
            profileUrl: 'https://images.unsplash.com/photo-1630568119734-1f6df1cd1669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwZ2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            lastMessage: 'Hi there, how are you?',
            hasStory: true,
            seenStory: true
          }
          ,
        {
          uid: 2,
          userName: 'John Doe',
          profileUrl: 'https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9obiUyMGRvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'Hey there!',
          hasStory: true,
          seenStory: false
        },
        {
          uid: 3,
          userName: 'Jane Smith',
          profileUrl: 'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'What are you up to?',
          hasStory: false,
          seenStory: false
        },
        {
          uid: 4,
          userName: 'Mike Johnson',
          profileUrl: 'https://images.unsplash.com/photo-1556890042-262d9f7c712f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9obiUyMGRvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'Long time no see!',
          hasStory: true,
          seenStory: false
        },
        {
          uid: 5,
          userName: 'Emily Davis',
          profileUrl: 'https://images.unsplash.com/photo-1630568255484-af1bf760b445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'How was your weekend?',
          hasStory: true,
          seenStory: true
        },
        {
          uid: 6,
          userName: 'David Lee',
          profileUrl: 'https://images.unsplash.com/photo-1576694051095-a86ee414784f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGpvaG4lMjBkb2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'Nice to meet you!',
          hasStory: false,
          seenStory: false
        },
        {
          uid: 7,
          userName: 'Linda Kim',
          profileUrl: 'https://plus.unsplash.com/premium_photo-1658506735673-5b203db92015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'Can you help me with this?',
          hasStory: true,
          seenStory: false
        },
        {
          uid: 8,
          userName: 'Tom Smith',
          profileUrl: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'I have a question for you.',
          hasStory: true,
          seenStory: false
        },
        {
          uid: 9,
          userName: 'Sarah Johnson',
          profileUrl: 'https://images.unsplash.com/photo-1656258220193-acdd513286d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdCUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'Thanks for your help!',
          hasStory: true,
          seenStory: true
        },
        {
          uid: 10,
          userName: 'Chris Lee',
          profileUrl: 'https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          lastMessage: 'See you later!',
          hasStory: false,
          seenStory: false
        }
      ]

  return (
    <View>
      <Text style={styles.headingText}>MessengerStyleStoriesUIWithList</Text>
      {/* <ScrollView contentContainerStyle={styles.container} >
        {users.map(({uid, userName, profileUrl, lastMessage, hasStory, timeStamp}) => (
            <View style={styles.userSection} key={uid}>
                <Image
                    source={{uri: profileUrl}}
                    style={styles.userImage}
                />
                <View style={styles.messageSection}>
                    <Text>{userName}</Text>
                    <View style={styles.messageBody}>
                        <Text>{lastMessage}</Text>
                        <Text>{timeStamp}</Text>
                    </View>
                </View>
            </View>
        ))}
      </ScrollView> */}
      <View style={styles.container}>
        <FlatList 
            data={users}
            renderItem={({item}) => (
                <View style={styles.userSection}>
                    <Image 
                        source={{uri: item.profileUrl}}
                        style={[styles.userImage, item.hasStory ? (item.seenStory ? {borderColor: "#ddd", borderWidth: 3} : {borderColor: "#0078ff", borderWidth: 3}) : null]}
                    />
                    <Text style={styles.userName} numberOfLines={1} ellipsizeMode='tail' >{item.userName}</Text>
                </View>
            )}
            keyExtractor={item => item.uid}
            horizontal
        />
      </View>

    </View>
  )
}

export default MessengerStyleUIWithList

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#000',
        padding: 15
    },
    headingText: {
        fontSize: 24,
        fontWeight: 400
    },
    userSection: {
        flex: 1,
        marginBottom: 10,
        width: 65,
        marginHorizontal: 5
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'contain'
    },
    userImageWithStory: {
        borderColor: '#0078ff',
        borderWidth: 3
    },
    userName: {
        color: '#fff'
    }
})