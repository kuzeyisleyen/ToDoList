import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import useTheme from "@/hooks/useTheme";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Id } from "@/convex/_generated/dataModel";

interface Props {
    item: {
        _id: Id<"yapilacaklar">;
        text: string;
        isCompleted: boolean;
    }
}

const YapilacakItem = ({ item }: Props) => {
    const { colors } = useTheme();
    const [duzenlemeModu, setDuzenlemeModu] = useState(false);
    const [yeniMetin, setYeniMetin] = useState(item.text);

    const toggleYapilacak = useMutation(api.yapilacaklar.toggleYapilacak);
    const yapilacakSil = useMutation(api.yapilacaklar.yapilacakSil);
    const yapilacakUpdate = useMutation(api.yapilacaklar.yapilacakUpdate);

    const handleToggle = async () => {
        try {
            await toggleYapilacak({ id: item._id });
        } catch (e) {
            Alert.alert("HATA", "Tamamlama işlemi başarısız");
        }
    };

    const handleSil = () => {
        Alert.alert("Sil", "Bu yapılacağı silmek istediğinize emin misiniz?", [
            { text: "İptal", style: "cancel" },
            {
                text: "Sil",
                style: "destructive",
                onPress: async () => {
                    try {
                        await yapilacakSil({ id: item._id });
                    } catch (e) {
                        Alert.alert("HATA", "Silme işlemi başarısız");
                    }
                }
            }
        ]);
    };

    const handleGuncelle = async () => {
        if (yeniMetin.trim() && yeniMetin !== item.text) {
            try {
                await yapilacakUpdate({ id: item._id, text: yeniMetin.trim() });
            } catch (e) {
                Alert.alert("HATA", "Güncelleme başarısız");
            }
        }
        setDuzenlemeModu(false);
    };

    return (
        <View style={[styles.container, {
            backgroundColor: colors.surface,
            borderColor: item.isCompleted ? colors.success : colors.border,
        }]}>
            <TouchableOpacity onPress={handleToggle}>
                <LinearGradient
                    colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
                    style={styles.checkCircle}
                >
                    <Ionicons name={item.isCompleted ? "checkmark" : "ellipse-outline"} size={18} color="#fff" />
                </LinearGradient>
            </TouchableOpacity>

            {duzenlemeModu ? (
                <TextInput
                    style={[styles.input, {
                        color: colors.text,
                        backgroundColor: colors.backgrounds.editInput,
                        borderColor: colors.primary,
                    }]}
                    value={yeniMetin}
                    onChangeText={setYeniMetin}
                    onSubmitEditing={handleGuncelle}
                    autoFocus
                />
            ) : (
                <Text style={[styles.text, {
                    color: item.isCompleted ? colors.textMuted : colors.text,
                    textDecorationLine: item.isCompleted ? "line-through" : "none",
                }]}>
                    {item.text}
                </Text>
            )}

            <TouchableOpacity onPress={duzenlemeModu ? handleGuncelle : () => setDuzenlemeModu(true)}>
                <Ionicons
                    name={duzenlemeModu ? "checkmark-circle" : "pencil"}
                    size={20}
                    color={duzenlemeModu ? colors.success : colors.textMuted}
                />
            </TouchableOpacity>

            {!duzenlemeModu && (
                <TouchableOpacity onPress={handleSil}>
                    <Ionicons name="trash-outline" size={20} color={colors.danger} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default YapilacakItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        gap: 10,
    },
    checkCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        flex: 1,
        fontSize: 15,
    },
    input: {
        flex: 1,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        padding: 6,
    },
});