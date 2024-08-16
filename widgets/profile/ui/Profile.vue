<template>
  <div class="profile-content">
    <div class="head-title">Личный кабинет</div>
    <div class="profile-info-block">
      <div class="profile-tabs">
        <div class="tab" @click="changeTab('general')">
          <SIconRender
            name="user-edit"
            :color="tab === 'general' ? 'violet' : ''"
          />
          <span :class="{ active: tab === 'general' }">Общие данные</span>
        </div>
        <div class="tab" @click="changeTab('password')">
          <SIconRender
            name="lock"
            :color="tab === 'password' ? 'violet' : ''"
          />
          <span :class="{ active: tab === 'password' }">Пароль</span>
        </div>
        <div class="tab" @click="changeTab('notification')">
          <SIconRender name="notification" />
          <span :class="{ active: tab === 'notification' }">
            Настройки уведомлений
          </span>
        </div>
        <div class="tab" @click="changeTab('session')">
          <SIconRender name="tv" :color="tab === 'session' ? 'violet' : ''" />
          <span :class="{ active: tab === 'session' }">Активные сессии</span>
        </div>
        <div class="tab" @click="logout">
          <SIconRender name="logout" />
          <span>Выйти</span>
        </div>
      </div>
      <div class="profile-data">
        <div class="content-block" v-if="tab === 'general'">
          <div class="photo items-center">
            <img :src="profileImageUrl" alt="" />
            <div class="photo-action">
              <div class="hint gray">
                Формат: jpg, png. Максимальный размер файла: 2Mb. <br />
                Рекомендованный размер 200х200px.
              </div>
              <label for="file">
                <input type="file" id="file" @change="onSelectFile" />
                <span class="upload-btn">Загрузить</span>
              </label>
            </div>
          </div>
          <div class="data-title">Общие данные</div>
          <div class="field"><SInput label="Имя" width="100%" /></div>
          <div class="field"><SInput label="Фамилия" width="100%" /></div>
          <div class="field"><SSelect label="Пол" class="wp-100" /></div>
          <div class="data-title">Учетные данные</div>
          <div class="field"><SInput label="Телефон" width="100%" /></div>
          <div class="field"><SInput label="Почта" width="100%" /></div>
          <div class="light">
            <SButton size="large" class=""> Сохранить </SButton>
          </div>
        </div>

        <div class="content-block" v-if="tab === 'password'">
          <div class="data-title">Изменить пароль</div>
          <div class="field password">
            <SInput label="Старый пароль" width="100%" />
          </div>
          <div class="field password">
            <SInput label="Новый пароль" width="100%" />
          </div>
          <div class="field password">
            <SInput label="Еще раз новый пароль" width="100%" />
          </div>
          <div class="light">
            <SButton size="medium">Изменить</SButton>
          </div>
        </div>

        <div class="content-block" v-if="tab === 'notification'">
          <div class="data-title">Получать на:</div>
          <div class="data-block">
            <div>
              <div class="data-label">Почта</div>
              <div class="data-info">ivanov1122@mail.com</div>
            </div>
            <SSwitch />
          </div>
          <div class="data-block">
            <div>
              <div class="data-label">Номер</div>
              <div class="data-info">+996 777 123456</div>
            </div>
            <SSwitch />
          </div>
          <div class="data-title">Типы уведомлении</div>
          <div class="notify-checks">
            <SCheckbox>Ответы магазинов на отзывы</SCheckbox>
            <SCheckbox>Рассылки о скидках и акциях</SCheckbox>
            <SCheckbox>Статусы заказов</SCheckbox>
          </div>
        </div>

        <div class="content-block" v-if="tab === 'session'">
          <div class="data-title">Последняя сессия</div>
          <div class="session-block">
            <div class="hint">Mac OS X, Mac • Браузер Chrome</div>
            <div class="hint gray">
              сегодня в 14:48 • Бишкек • 94.143.197.184 • Активный сеанс
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import {
  SButton,
  SInput,
  SSelect,
  SIconRender,
  SCheckbox,
  SSwitch,
} from '@tumarsoft/ogogo-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const tab = ref('')
const profileObj = ref({ image: null })

onMounted(() => {
  changeTab('general')
})

const changeTab = (val: string) => {
  tab.value = val
}

const profileImageUrl = computed(() =>
  profileObj.value?.image
    ? profileObj.value?.image
    : '/_nuxt/assets/images/empty-photo.svg',
)

const convertToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = error => {
      reject(error)
    }
  })
}

const onSelectFile = async (e: any) => {
  const file = e.target.files[0]
  if (file) {
    profileObj.value.image = await convertToBase64(file)
  }
}

const logout = () => {
  router.push('/')
  window.localStorage.removeItem('sessionId')
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.profile-content {
  .profile-title {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 35px;
  }
  .profile-info-block {
    display: flex;
  }
  .profile-tabs {
    margin-right: 40px;
    min-width: 280px;
    .tab {
      font-weight: 600;
      font-size: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 12px 50px 12px 0;
      span {
        margin-left: 16px;
      }
      .active {
        color: $violet-600;
      }
    }
  }
  .profile-data {
    padding-top: 12px;
    min-width: 550px;
  }
  .divider {
    border-bottom: 2px dotted $gray-200;
  }
  .content-block {
    .data-title {
      font-weight: 600;
      font-size: 16px;
      margin: 24px 0 12px;
    }
    .data-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 16px;
      .container {
        width: auto;
      }
    }
    .data-label {
      font-weight: 500;
      font-size: 14px;
      color: $gray-500;
      margin-bottom: 4px;
    }
    .data-info {
      font-weight: 500;
      font-size: 16px;
    }
    .hint {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 12px;
      &.gray {
        color: $gray-500;
      }
    }
    .session-block {
      border: 1px solid $gray-200;
      padding: 12px 16px;
      border-radius: 8px;
    }
    .photo {
      display: flex;
      align-items: center;
      img {
        width: 96px;
        height: 96px;
        object-fit: cover;
      }
      .photo-action {
        margin-left: 24px;
      }
    }
    .field {
      margin-top: 12px;
      &.password {
        margin-top: 16px;
      }
    }
    .button {
      margin-top: 24px;
    }
    .notify-checks {
      margin-top: 24px;
      .checkbox-container {
        margin-top: 15px;
      }
    }
  }
  #file {
    display: none;
  }
  .upload-btn {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 11px 16px;
    background: $white;
    border-radius: 8px;
    border: 1px solid $gray-200;
    cursor: pointer;
  }
  .textarea-container {
    width: 100%;
  }
}
</style>
