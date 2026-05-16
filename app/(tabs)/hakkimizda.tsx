import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/useTheme";

const Hakkimizda = () => {
    // @ts-ignore
    const { colors } = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
            <Text style={{ color: colors.text, fontSize: 28, fontWeight: "bold" }}>
                Hakkımızda
            </Text>
            <Text style={{ color: colors.textMuted, fontSize: 16, marginTop: 12 }}>
                Bu uygulama yapılacaklar listesi yönetimi için geliştirilmiştir.
            </Text>
        </SafeAreaView>
    )
}

export default Hakkimizda

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})