import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#023e8a',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 5,
    },
    taskContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    task: {
        fontSize: 18,
        color: '#333333',
    },
    completedTask: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    deleteButton: {
        marginLeft: 10,
    },
    taskContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskText: {
        fontSize: 18,
        flex: 1,
    },
    taskTextCompleted: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    taskCompleted: {
        backgroundColor: '#d3ffd3',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    reminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    reminder: {
        fontSize: 18,
    },
    timer: {
        fontSize: 48,
        marginBottom: 20,
    },
    stepContainer: {
        marginBottom: 15,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#023e8a',
    },
    stepDescription: {
        fontSize: 16,
        color: '#333333',
    },
});
