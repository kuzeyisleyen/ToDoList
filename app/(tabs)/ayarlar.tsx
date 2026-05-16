import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import ProgressStats from "@/components/ProgressStats";
import Tercihler from "@/components/Tercihler";
import Tehlike from "@/components/Tehlike";

export default function Ayarlar() {
    const { colors } = useTheme();

    return (
        <LinearGradient colors={colors.gradients.background} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <ProgressStats />
                    <Tercihler />
                    <Tehlike />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scroll: { padding: 16, gap: 16 },
});