<template>
  <div class="address-list">
    <div class="address-list__container">
      <div :class="['address-list__content', { activeList: isActive }]">
        <div class="address-list__header header-list">
          <div class="header-list__title">Доставить курьером</div>
          <div class="header-list__setting select">
            <div class="select-container">
              <button @click="toggleDropdown" class="select-button">
                <span class="dropdown-icon">
                  <BaseIcon
                    name="kebab"
                    viewBox="0 0 24 24"
                    :class="['icon-svg', { active: isDropdownOpen }]"
                  />
                </span>
              </button>
              <ul v-if="isDropdownOpen" class="dropdown-list">
                <li @click="selectOption('один')">
                  <div class="dropdown-list__icon">
                    <BaseIcon
                      name="delet"
                      viewBox="0 0 24 24"
                      class="icon-list"
                    />
                  </div>
                  <div class="dropdown-list__text">Удалить</div>
                </li>
                <li @click="selectOption('два')">
                  <div class="dropdown-list__icon">
                    <BaseIcon
                      name="pen"
                      viewBox="0 0 24 24"
                      class="icon-list"
                    />
                  </div>
                  <div class="dropdown-list__text">Редактировать</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="address-list__body">
          <span>
            Бишкек, 5 микрорайон, д. 3/1, кв. 16, под. 1, дмф. 16B, этаж 6
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

interface Props {
  isActive?: boolean
}

const { isActive } = defineProps<Props>()

const isDropdownOpen = ref(false)
const selectedOption = ref('')

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = option => {
  selectedOption.value = option
  isDropdownOpen.value = false
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.icon {
  &-svg {
    width: 24px;
    height: 24px;
    margin-top: 5px;
  }
  &-list {
    width: 24px;
    height: 30px;
  }
}

.active {
  background: rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.header-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__title {
    font-size: 12px;
    font-weight: 500;
    color: $gray-500;
  }
  &__body {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: $black;
  }
}

.address-list {
  margin: 16px 0;
  &__content {
    padding: 5px 16px 16px 16px;
    border: 1px solid $gray-200;
    border-radius: 8px;
  }
}

.select-container {
  position: relative;
}

.select-button {
  border: 1px solid #ccc;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  margin-right: -5px;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
  list-style: none;
  padding: 10px 14px;
  margin: 0;
  border-radius: 8px;
}

.dropdown-list li {
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 16px;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}

.activeList {
  border: 1px solid $violet-600;
}
</style>
