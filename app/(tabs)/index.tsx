import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import LoadingScreen from "@/components/LoadingScreen";
import YapilcakGiris from "@/components/YapilcakGiris";
import YapilacakItem from "@/components/YapilacakItem";
import { LinearGradient } from "expo-linear-gradient";

export default function Yapilacaklar() {
    const { colors } = useTheme();
    const yapilacaklar = useQuery(api.yapilacaklar.getYapilacaklar);

    if (yapilacaklar === undefined) return <LoadingScreen />;

    return (
        <LinearGradient colors={colors.gradients.background} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Header />
                <YapilcakGiris />
                {yapilacaklar.length === 0 ? (
                    <EmptyState />
                ) : (
                    <FlatList
                        data={yapilacaklar}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <YapilacakItem item={item} />}
                        contentContainerStyle={{ padding: 16, gap: 10 }}
                    />
                )}
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});