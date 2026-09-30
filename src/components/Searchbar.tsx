import { useTheme } from '@/hooks/use-theme'
import { Pressable, TextInput, View } from 'react-native'

interface Props {
    placeholder?: string
    value?: string
    onChangeText?: (text: string) => void
    className?: string
    onPress?: () => void
}

const Searchbar = ({ placeholder, value, onChangeText, className, onPress }: Props) => {
    const theme = useTheme()

    if (onPress) {
        return (
            <Pressable className={className} onPress={onPress}>
                <View pointerEvents="none">
                    <TextInput
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={theme.textSecondary}
                        onChangeText={onChangeText}
                        editable={false}
                        className='text-text bg-element border border-selected rounded-xl px-4 py-3 text-base'
                    />
                </View>
            </Pressable>
        )
    }

    return (
        <View className={className}>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={theme.textSecondary}
                onChangeText={onChangeText}
                className='text-text bg-element border border-selected rounded-xl px-4 py-3 text-base'
            />
        </View>
    )
}

export default Searchbar