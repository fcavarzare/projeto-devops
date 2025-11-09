
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.100"
    }
  }
  required_version = ">= 1.6.0"
}

provider "azurerm" {
  features {}
}


resource "azurerm_resource_group" "rg" {
  name     = var.resource_group
  location = var.location
}

resource "azurerm_virtual_network" "vnet" {
  name = "vnet-${var.vm_name}"
  location = var.location
  resource_group_name = var.resource_group
  address_space = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "subnet" {
  name = "snet-${var.vm_name}"
  resource_group_name  = var.resource_group
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_public_ip" "pip" {
  name = "pip-${var.vm_name}"
  resource_group_name = var.resource_group
  location = var.location
  allocation_method = "Dynamic"
  sku = "Basic"
}

resource "azurerm_network_security_group" "nsg" {
  name = "nsg-${var.vm_name}"
  location = var.location
  resource_group_name = var.resource_group

  security_rule { name="allow_ssh"  priority=1001 direction="Inbound" access="Allow" protocol="Tcp"
    source_port_range="*" destination_port_range="22" source_address_prefix="*" destination_address_prefix="*" }

  security_rule { name="allow_http" priority=1002 direction="Inbound" access="Allow" protocol="Tcp"
    source_port_range="*" destination_port_range="80" source_address_prefix="*" destination_address_prefix="*" }
}

resource "azurerm_network_interface" "nic" {
  name = "nic-${var.vm_name}"
  location = var.location
  resource_group_name = var.resource_group

  ip_configuration {
    name = "ipcfg"
    subnet_id = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_network_interface_security_group_association" "nsg_assoc" {
  network_interface_id = azurerm_network_interface.nic.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                = var.vm_name
  resource_group_name = var.resource_group
  location            = var.location
  size                = "Standard_B1s"         # elegível Free
  admin_username      = var.admin_username
  network_interface_ids = [azurerm_network_interface.nic.id]

  admin_ssh_key { username = var.admin_username  public_key = var.ssh_public_key }

  os_disk {
    caching = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}

output "public_ip"    { value = azurerm_public_ip.pip.ip_address }
output "ansible_hint" { value = "web ansible_host=${azurerm_public_ip.pip.ip_address} ansible_user=${var.admin_username}" }

