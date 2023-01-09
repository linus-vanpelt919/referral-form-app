import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Radio,
    RadioGroup,
    Stack,
    VStack,
    Textarea,
    Select,
    Checkbox,
    Heading,
    CheckboxGroup,
    Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const TopPage = () => {
    const [uuid, setUuid] = useState("");
    const [data,setData] = useState("");
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, age, gender, interest, delivery } = data;
        const file = new FormData();
        file.append("name", name);
        file.append("age", age);
        file.append("gender", gender);
        file.append("interest", interest);
        file.append("delivery", delivery);

        await axios
            .post("/api", file, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                //送信が成功したらuuidを画面に表示してあげる
                setUuid(res.data.uuid);
            })
            .catch((error) => {
                //エラーメッセージ表示
                console.log(error);
            });
    };
    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(uuid);
    };
    return (
        <div>
            <Heading mb='40px'>事前アンケート</Heading>
            {uuid ? (
                <Stack spacing={[1, 2]}>
                    <Text py="10px">紹介コードは以下となります。</Text>
                    <Button bg='gray.50' color='gray.400' onClick={(e) => handleCopy(e)}>{uuid}</Button>
                </Stack>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl className="" isInvalid={errors.name}>
                        <FormLabel htmlFor="name">お名前</FormLabel>
                        <Input
                            id="name"
                            placeholder="おなまえ"
                            {...register("name", {
                                required: "必須です",
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.age}>
                        <FormLabel htmlFor="age">年齢</FormLabel>
                        <Input
                            id="age"
                            placeholder="age"
                            {...register("age", {
                                required: "必須です",
                            })}
                        />
                        <FormErrorMessage>
                            {errors.age && errors.age.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.gender}>
                        <FormLabel htmlFor="sex">年齢</FormLabel>
                        <RadioGroup>
                            <Stack direction="row">
                                <Radio
                                    {...register("gender", {
                                        required: "必須です",
                                    })}
                                    value="man"
                                >
                                    男の子
                                </Radio>
                                <Radio
                                    {...register("gender", {
                                        required: "必須です",
                                    })}
                                    value="woman"
                                >
                                    女の子
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <FormErrorMessage>
                            {errors.gender && errors.gender.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.interest}>
                        <FormLabel htmlFor="interest">興味関心</FormLabel>
                        <Textarea
                            id="interest"
                            placeholder="お子様の発育や興味があるものについて"
                            {...register("interest", {
                                maxLength: {
                                    value: 200,
                                    message: "200文字以上入力してください",
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.interest && errors.interest.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.interest}>
                        <FormLabel htmlFor="interest">
                            お届け先の住環境について
                        </FormLabel>
                        <CheckboxGroup
                            colorScheme="green"
                            // defaultValue={["naruto", "kakashi"]}
                        >
                            <Stack
                                spacing={[1, 2]}
                                direction={["column", "column"]}
                            >
                                <Checkbox
                                    {...register("living")}
                                    value="下の階への騒音が気になる"
                                >
                                    下の階への騒音が気になる
                                </Checkbox>
                                <Checkbox
                                    {...register("living")}
                                    value="室内で犬や猫などのペットを飼育している"
                                >
                                    室内で犬や猫などのペットを飼育している
                                </Checkbox>
                                <Checkbox
                                    {...register("living")}
                                    value="手押し車や小型の乗り物などの使用は難しい"
                                >
                                    手押し車や小型の乗り物などの使用は難しい
                                </Checkbox>
                                <Checkbox
                                    {...register("living")}
                                    value="生後6ヶ月以下：ベビーベッドは使用していない"
                                >
                                    生後6ヶ月以下：ベビーベッドは使用していない
                                </Checkbox>
                                <Checkbox
                                    {...register("living")}
                                    value="生後6ヶ月以下：天井にモビールなどの設置は難しい"
                                >
                                    生後6ヶ月以下：天井にモビールなどの設置は難しい
                                </Checkbox>
                            </Stack>
                        </CheckboxGroup>
                        <FormErrorMessage>
                            {errors.living && errors.living.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.delivery}>
                        <FormLabel htmlFor="delivery">
                            お届け希望時間帯
                        </FormLabel>
                        <Select
                            {...register("delivery", {})}
                            id="delivery"
                            placeholder="選択してください"
                        >
                            <option value="午前中">午前中</option>
                            <option value="午後">午後</option>
                            <option value="特になし">特になし</option>
                        </Select>
                        <FormErrorMessage>
                            {errors.delivery && errors.delivery.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                        className="btn"
                    >
                        登録
                    </Button>
                </form>
            )}
        </div>
    );
};
