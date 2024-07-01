<template>
  <div class="partner">
    <h1>{{ $t("label-0b455e69-2aa3-44d4-ae8c-ce07b1e50217") }}</h1>
    <p>{{ $t("label-bfed7b65-7dde-4798-9976-ce333a4f5f08") }}</p>
    <h2>{{ $t("label-a3551c3b-126d-4412-95b8-2b047bebc4c8") }}</h2>
    <h3>{{ $t("label-7438c017-0f5e-4eb8-98c9-c468226ec7cc") }}</h3>
    <p>{{ $t("label-59cc80f4-74df-454f-9f15-aeef28f98947") }}</p>
    <h3>{{ $t("label-ed83b287-897e-46ef-b241-2acef0de8a51") }}</h3>
    <p>{{ $t("label-7be32f05-3425-4073-a215-6d8d5ad741be") }}</p>
    <h3>{{ $t("label-d46f634d-4466-4f93-b680-bcab8928a392") }}</h3>
    <p>{{ $t("label-36f0c8ec-042e-4747-9c21-6a1d3b388cb6") }}</p>
    <h3>{{ $t("label-8341dc3e-c33f-4b99-b188-05ed8b327b14") }}</h3>
    <p>{{ $t("label-a41556a8-b05c-48b4-936e-4e62154ae8ab") }}</p>

    <h2>{{ $t("label-801a6d93-c592-41c0-941a-4a5a087bbc7e") }}</h2>

    <h3>{{ $t("label-5ae6f1da-60c2-4a8b-8e63-d5e88c0b6d1f") }}</h3>
    <p>{{ $t("label-5e597432-5447-493b-ba66-c77d446b4f76") }}</p>
    <p>{{ $t("label-ad4fdefd-09f3-43db-b011-ae391364e6fd") }}</p>

    <h3>{{ $t("label-77c98b7b-2139-47de-b69e-4235fd8d2559") }}</h3>
    <p>{{ $t("label-7d6c5e7e-e7e9-4fad-94b1-02771fabea35") }}</p>
    <p>{{ $t("label-adf71211-5d21-4681-a93a-f68e5e4a44a8") }}</p>

    <h2>{{ $t("label-a8acc8de-4816-4918-894c-9904562462c7") }}</h2>

    <h3>{{ $t("label-0a76f381-f756-4722-84e8-e3989584bd20") }}</h3>
    <p>{{ $t("label-ffd48d47-d4ef-49ae-b95a-a0af55c9b18d") }}</p>
    <p>{{ $t("label-44300dff-b5c9-4071-8d19-adace45fadaf") }}</p>
    <p>{{ $t("label-68851ec4-3c12-4864-879e-0758506e5014") }}</p>

    <h2>{{ $t("label-2f1d0bcd-ee80-4f27-85db-c0033246b27b") }}</h2>
    <p>
      {{ $t("label-3bc7a388-a36d-4da4-bee5-a69262166dc1") }}
      partners@ogogo.kg
      {{ $t("label-03d96570-26cb-4acb-9354-ea06d873ff75") }}
    </p>
    <p>{{ $t("label-f4836b0d-4165-494c-9d05-a4b2f4bdbc97") }}</p>

    <div v-if="isShowSuccess" class="success-msg">
      <b>
        {{ $t("label-cb72bd6c-d909-481d-b412-0ae7de7191f9") }}
      </b>
      <b> partners@ogogo.kg </b>
      <b>
        {{ $t("label-ece3c89b-9e93-4388-8e3f-1a696e5dcdf2") }}
      </b>
    </div>
    <div v-else class="form">
      <form>
        <input
          v-model="formObj.name"
          type="text"
          :class="{ error: !formObj.name && hasError }"
          :placeholder="$t('label-45b2dc4f-64e0-4e99-b533-713d328d69ea')"
        />
        <input
          v-model="formObj.companyName"
          type="text"
          :class="{ error: !formObj.companyName && hasError }"
          :placeholder="$t('label-d59fe419-96bf-4827-9a43-829a7ba57055')"
        />
        <input
          v-model="formObj.phone"
          type="number"
          :class="{ error: !formObj.phone && hasError }"
          placeholder="+996 555 555555"
        />
        <input
          v-model="formObj.email"
          type="text"
          :placeholder="$t('label-e3dba7ba-99e7-479d-b65b-3baf56176f80')"
        />
        <div class="become-partner">
          <button
            :disabled="isDisabled"
            :class="{ disabled: isDisabled }"
            type="button"
            @click="onSubmit"
          >
            {{ $t("label-7dfe3cd8-41d9-4819-99ed-6f10c3068241") }}
          </button>
        </div>
      </form>
    </div>
    <p class="rights">
      {{ $t("label-0c09a251-cc0b-4b5a-ba2e-009bc1ab44a3") }}
    </p>
    <FooterInfo />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

const hasError = ref(false);
const isShowSuccess = ref(false);
const isDisabled = ref(false);

const formObj = ref({
  name: "",
  companyName: "",
  phone: "",
  email: "",
});

const onSubmit = () => {
  hasError.value =
    Boolean(!formObj.value.name) ||
    Boolean(!formObj.value.companyName) ||
    Boolean(!formObj.value.phone);
  if (!hasError.value) {
    isDisabled.value = true;
    const message = `<b>Сообщение о партнерстве:</b>\n\n<b>Имя:</b> ${formObj.value.name}\n<b>Название организации:</b> ${formObj.value.companyName}\n<b>Тел:</b> ${formObj.value.phone}\n<b>email:</b> ${formObj.value.email}`;
    axios({
      method: "POST",
      url: "https://api-client.ogogo.kg/api/Clients/SendRequestForRegistrationTradeOrganization",
      data: { message },
    })
      .then(() => {
        isShowSuccess.value = true;
        isDisabled.value = false;
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
};
</script>

<style scoped>
.form {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.form form {
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
}
.form input {
  display: block;
  width: 300px;
  height: 40px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #aaaaaa;
  margin-bottom: 8px;
  padding-left: 8px;
  &.error {
    border-color: rgba(255, 0, 0, 0.536);
  }
  @media screen and (max-width: 1023px) {
    width: calc(100% - 12px);
  }
}
.form button {
  width: 310px;
  margin-top: 10px;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
}
h1,
h2,
h3 {
  color: #6d28d9;
}
.rights {
  margin-top: 200px;
  @media screen and (max-width: 1023px) {
    margin-top: 100px;
  }
}
.success-msg {
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #aaaa;
  border-radius: 6px;
  padding: 10px;
  color: #6d28d9;
}
.success-msg b {
  line-height: 24px;
}
</style>
